import { Icon } from '@iconify/react';

export const Home = (): JSX.Element => (
  <div
    className="*flex-center"
    w-flex="col"
    w-w="full"
    w-h="full"
    w-select="none"
  >
    <Icon
      icon="carbon:picnic-area"
      w-w="21"
      w-h="21"
      w-text="4xl $color-primary"
    />
    <span w-text="3xl" w-m="t-2">
      Vitact
    </span>
    <i w-text="md" w-opacity="75" w-m="t-1">
      Opinionated Vite Starter Template
    </i>
  </div>
);
