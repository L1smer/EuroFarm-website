type ProductListInfo = {
  headingOfList: string;
  listComposition: string[];
};

export type InfoSection = {
  mainText: string;
  listItems: string[];
  bgColor: string;
  containsText?: string;
  productListInfo?: ProductListInfo;
};

type DosageItem = {
  species: string;
  value: string;
};

type DosageForm = {
  form?: string;
  productInfo: DosageItem[];
};

export type DosageInfo = {
  availability: string;
  products: DosageForm[];
};

export type ProductInfo = {
  logo: string;
  highlightText: string;
  highlightTextColor: string;
  infoSection: InfoSection;
  img: string;
  productText: string;
  availableImgs: { src: string }[];
  availableIn: string[];
  dosageInfo: DosageInfo;
};
