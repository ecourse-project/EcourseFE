import { MailingList } from '@goldfishcode/homemeta-cmp-sdk/libs/api/mailing/models';
import { TableRecord } from 'src/sections/Dashboard/Page/Mailing';
import { Pagination } from '@goldfishcode/homemeta-cmp-sdk/libs/type';

export const updateMailingListState = (
	mailingList: MailingList,
	mailingListState: Pagination<MailingList>
): Pagination<MailingList> => {
	if (!mailingListState.results.length) return mailingListState;

	const itemJustUpdateIdx = mailingListState.results.findIndex(
		(item) => item.id === mailingList.id
	);

	if (itemJustUpdateIdx < 0) return mailingListState;

	const items = [...mailingListState.results];

	const { id, ...data } = mailingList;

	items.splice(itemJustUpdateIdx, 1, {
		id,
		...data,
	});

	return {
		...mailingListState,
		results: items,
	};
};

export const deleteMailingListFromState = (
	id: string,
	mailingListState: Pagination<MailingList>
): Pagination<MailingList> => {
	if (!mailingListState.results.length) return mailingListState;

	const itemJustDeleteIdx = mailingListState.results.findIndex(
		(item) => item.id === id
	);

	if (itemJustDeleteIdx < 0) return mailingListState;

	const items = [...mailingListState.results];

	items.splice(itemJustDeleteIdx, 1);

	return {
		...mailingListState,
		results: items,
	};
};
