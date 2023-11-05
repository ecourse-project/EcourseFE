import { Alert } from 'antd';
import React from 'react';

import { css } from '@emotion/react';

const AlertCard: React.FC<{ description?: string; message?: string }> = ({ message = '' }) => {
  return (
    <section
      css={css`
        .ant-alert-info {
          padding: 20px !important;
          border-radius: 5px;
          background-color: rgba(101, 178, 255, 0.4);
          border: none;
          .ant-alert-message {
            display: ${message ? 'block' : 'none'};
          }
        }
      `}
    >
      <Alert
        message={message ?? ''}
        description={
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<sup>1</sup>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. <br/> <br/><sup>2</sup>The number of individual transactions an agent was involved in during the previous 12 months, regardless of whether they were an individual listing or sale or were co-listed/sold. Representing both buyer and seller will count for 2 transactions in our system.',
            }}
          ></div>
        }
        type="info"
      />
    </section>
  );
};

export default AlertCard;
