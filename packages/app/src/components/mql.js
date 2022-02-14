import mql from '@microlink/mql'

import { FetchFactory } from './fetch-factory'

const pending = new Map()

export const MQL = ({ children, url, options }) => (
  <FetchFactory
    cache={pending}
    func={mql}
    url={url}
    options={options}
  >
    {children}
  </FetchFactory>
)
