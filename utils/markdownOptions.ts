import { Link } from '@element/Link';

export const options = {
  overrides: {
    img: {
      props: {
        className: 'prose-img mx-auto rounded-2xl shadow-2xl shadow-neutral-800',
      },
    },
    a: {
      props: {
        className: 'linked-white  text-wolwhite',
        target: '_blank',
      },
    },
    ul: {
      props: {
        className: 'text-wolgray',
      },
    },
    strong: {
      props: {
        className: 'text-neutral-400 font-bold',
      },
    },
    code: {
      props: {
        className: 'text-wolgray font-bold',
      },
    },
    blockquote: {
      props: {
        className: 'border-l-4 border-cyan-600',
      },
    },
  },
};
