---
nav: Components
group: Provider
title: API Hub AI
atomId: ApiHubAi
description: https://apihubai.com
---

## Icons

```tsx
import { ApiHubAi } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <ApiHubAi size={64} />;
```

## Text

```tsx
import { ApiHubAi } from '@lobehub/icons';

export default () => <ApiHubAi.Text size={48} />;
```

## Combine

```tsx
import { ApiHubAi } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <ApiHubAi.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { ApiHubAi } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <ApiHubAi.Avatar size={64} />
    <ApiHubAi.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { ApiHubAi } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={ApiHubAi.colorPrimary} />
  </Flexbox>
);
```
