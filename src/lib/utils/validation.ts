const validation = {
  email: {
    required: 'Vui lòng điền Email.',
    invalid: 'Định dạng Email không hợp lệ.',
    format: 'Email này đã được đăng ký.',
    exist: 'Email does not exist/Email has not been registered.',
  },
  username: {
    required: 'Username is missing.',
    format: 'Username is already associated with an existing account.',
    exist: 'Username does not exist/Email has not been registered.',
  },
  password: {
    required: 'Vui lòng điền mật khẩu.',
    invalidPwdRegex: 'The password must have a min. of eight characters, at least one letter and one number.',
  },
  target: {
    required: 'Vui lòng điền thông tin.',
  },
  homes: {
    required: 'Vui lòng điền thông tin.',
  },
  farm: {
    required: 'Vui lòng điền thông tin.',
  },
  interaction: {
    required: 'Vui lòng điền thông tin.',
  },
  ratio: {
    required: 'Vui lòng điền thông tin.',
  },
  events: {
    required: 'Please select',
  },
  adoption: {
    required: 'Please select',
  },
  avatar: {
    required: 'Please upload a profile photo',
  },
  frequency: {
    required: 'Vui lòng điền thông tin.',
  },
  company: {
    required: 'Vui lòng điền thông tin.',
  },
  mailing: {
    required: 'Please enter a mailing list.',
  },
  role: {
    required: 'Please select a role',
  },
  fullName: {
    required: 'Vui lòng điền thông tin',
    trim: 'Full Name cannot include leading and trailing spaces.',
    format: 'Full Name cannot include numeric and special characters.',
  },
  firstName: {
    required: 'Vui lòng điền thông tin',
    trim: 'First Name cannot include leading and trailing spaces.',
    format: 'First name cannot include numeric and special characters.',
  },
  lastName: {
    required: 'Vui lòng điền thông tin',
    trim: 'Last Name cannot include leading and trailing spaces.',
    format: 'Last name cannot include numeric and special characters.',
  },
  confirm: {
    required: 'Vui lòng điền mật khẩu.',
    invalidPwdRegex: 'Your account info was entered incorrectly.',
  },
  name: {
    required: 'Name is missing.',
    NHrequired: 'Please enter a mailing list name.',
    ExistingName: 'Mailing list name already exists.',
  },
  dre: {
    required: 'Vui lòng điền thông tin',
    trim: 'DRE cannot include leading and trailing spaces.',
    format: 'DRE number is already associated with an existing account.',
  },
  market: {
    required: 'Please select a market.',
    trim: 'Market cannot include leading and trailing spaces.',
  },
  website: {
    regWeb:
      /^((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+(\/)?.([\w?[a-zA-Z-_%/@?]+)*([^/\w?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/,
    url: 'Your URL is invalid.',
    required: 'Vui lòng điền thông tin',
  },
  title: {
    required: 'Vui lòng điền thông tin.',
  },
  changePassword: {
    required: 'Vui lòng điền thông tin.',
  },
  confirmPassword: {
    required: 'Vui lòng điền thông tin',
    doesNotMatch: 'Passwords do not match.',
  },
  address: {
    required: 'Vui lòng điền thông tin.',
  },
  city: {
    required: 'Vui lòng điền thông tin.',
  },
  state: {
    required: 'Vui lòng điền thông tin.',
  },
  zipcode: {
    required: 'Vui lòng điền thông tin.',
  },
  country: {
    required: 'Vui lòng điền thông tin.',
  },
  payment: {
    required: 'Vui lòng điền thông tin',
  },
  phone: {
    required: 'Vui lòng điền thông tin',
    invalid: 'Invalid phone number format',
  },
  campaign_target: {
    required: 'Please select a target audience.',
  },
  campaign_neighborhood: {
    required: 'Please select a neighborhood.',
  },
  campaign_mailing: {
    required: 'Please select a mailing list.',
  },
  campaign_interests: {
    required: 'Please select an interest.',
  },
  campaign_employer: {
    required: 'Please select an employer.',
  },
  campaign_type: {
    required: 'Please select a type.',
  },
  campaign_campaigns: {
    required: 'Please select a campaign.',
  },
  campaign_agent: {
    required: 'Please select a agent.',
  },
  modal_remove: {
    required: 'Please choose a reason to remove the action.',
  },
  nft_name: {
    required: 'NFT name is required',
  },
  upload_file: {
    required: 'Please select a file',
  },
};

export default validation;

export const MessageError = {
  error_oops: 'Oops! Something went wrong, please try again.',
  all_home_invalid: 'Your total homes across all 3 neighborhoods exceeds 3,000',
  shape_invalid: 'Some points are overlapping in the shape you drew. Please try again.',
  missing_market:
    'We do not detect any past transactions in the polygon you drew; this will result in missing market share data in your report. We recommend you redraw your polygon so that it includes one or more pins.',
  agent_not_found: 'Agent not found',
  nh_not_found: 'Neighborhood not found',
  no_nfts: 'There are no campaign NFTs in your wallet',
  no_nfts_matched: 'There are no matched campaign NFTs. Please try again',
};
