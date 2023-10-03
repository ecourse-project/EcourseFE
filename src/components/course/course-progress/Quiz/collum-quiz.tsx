import { css } from '@emotion/react';
import { Button, Tag, Typography } from 'antd';
import React, { useMemo, useState } from 'react';
import { Quiz } from 'src/lib/types/backend_modal';
import { GrConnect } from 'react-icons/gr';
import { isEmpty } from 'lodash';
const { Text, Link } = Typography;
const Column = ({ data, onRowClick, selectedRow, matchedPair }) => {
  const disableList = matchedPair.map((v) => [v.first, v.second].flat(Infinity)).flat(Infinity);
  return (
    <div
      className="left-column"
      css={css`
        .row {
          border: 1px solid #000;
          padding: 10px;
          border-radius: 5px;
          margin: 10px;
          cursor: pointer;
          &:hover {
            border-width: 2px;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          }
        }
        .selecting {
          border-color: green;
          border-width: 2px;
        }
        .disabled {
          border-width: 2px;
          cursor: not-allowed;
          opacity: 0.3;
        }
      `}
    >
      {data.map((row, index) => (
        <div
          className={`row ${disableList.includes(row.id) ? 'disabled' : ''} ${
            [selectedRow.first, selectedRow.second].includes(row.id) ? 'selecting' : ''
          }`}
          key={row.id}
          onClick={() => {
            if (disableList.includes(row.id)) return;
            onRowClick(row.id);
          }}
        >
          {row.content}
        </div>
      ))}
    </div>
  );
};

interface ColumnQuiz {
  quiz: Quiz;
}

const ColumnQuiz: React.FC<ColumnQuiz> = ({ quiz }) => {
  const quizData = quiz.match_question;
  const firstColId = useMemo(() => {
    return quizData?.first_column.map((v) => v.id);
  }, [quizData?.first_column]);
  const secondColId = useMemo(() => {
    return quizData?.second_column.map((v) => v.id);
  }, [quizData?.second_column]);
  const [selectPair, setSelectPair] = useState<{ first: string; second: string }>({ first: '', second: '' });
  const [matchPair, setMatchPair] = useState<Array<{ first: string; second: string }>>([]);

  if (!quizData) return;
  const handleRowClick = (id) => {
    if (firstColId?.includes(id)) {
      setSelectPair((prev) => ({ ...prev, first: id }));
    } else {
      setSelectPair((prev) => ({ ...prev, second: id }));
    }
  };

  const handleConnect = (leftId, rightId) => {
    setMatchPair((prev) => {
      return [...prev.filter((v) => !isEmpty(v)), { first: leftId, second: rightId }];
    });
    setSelectPair({ first: '', second: '' });
  };

  const removeMatchedTag = (firstId: string) => {
    setMatchPair((prev) => {
      return prev.filter((pair) => pair.first !== firstId);
    });
  };

  return (
    <>
      <div
        className="column-quiz"
        css={css`
          display: flex;
          justify-content: space-evenly;
          .connect {
            display: flex;
            align-items: center;
            .ant-btn {
              background-color: transparent;
              border: none;
              box-shadow: none;
              svg {
                font-size: 20px;
              }

              &:hover:not([disabled]) {
                path {
                  fill: green;
                }
              }
            }
          }
        `}
      >
        <Text className="question">{quizData?.content}</Text>
        <div className="first-col">
          <Column
            data={quizData.first_column}
            onRowClick={handleRowClick}
            selectedRow={selectPair}
            matchedPair={matchPair}
          />
        </div>
        <div className="connect">
          <Button
            shape="circle"
            disabled={!(selectPair.first && selectPair.second)}
            onClick={() => handleConnect(selectPair.first, selectPair.second)}
          >
            <GrConnect />
          </Button>
        </div>
        <div className="second-col">
          <Column
            data={quizData.second_column}
            onRowClick={handleRowClick}
            selectedRow={selectPair}
            matchedPair={matchPair}
          />
        </div>
      </div>
      <div
        className="matched-pair-tag"
        css={css`
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          .ant-tag {
            display: flex;
            justify-content: space-between;
            width: 200px;
          }
          .tag-matched {
            p {
              width: 150px;
              overflow: hidden;
              text-overflow: ellipsis;
              margin: 3px 0;
            }
          }
        `}
      >
        {matchPair?.map((pair) => {
          if (isEmpty(pair)) return;
          const firstContent = quizData.first_column.find((v) => v.id === pair.first)?.content;
          const secondContent = quizData.second_column.find((v) => v.id === pair.second)?.content;
          return (
            <Tag
              key={pair.first}
              closable={true}
              style={{ userSelect: 'none' }}
              onClose={() => removeMatchedTag(pair.first)}
              color="geekblue"
            >
              <div className="tag-matched">
                <p title={firstContent}>{firstContent}</p>
                <p title={secondContent}>{secondContent}</p>
              </div>
            </Tag>
          );
        })}
      </div>
    </>
  );
};

export default ColumnQuiz;
