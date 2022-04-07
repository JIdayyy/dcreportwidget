import React, { Suspense, useState } from 'react'
import WidgetPortal from '../Portal'
import ClosedWidgetButton from '../UI/ClosedWidget.button'
import Widget from '../Widget'

const LazyWidget = React.lazy(() => import('../Widget/index'))

const WidgetOpenHOC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  if (isOpen)
    return (
      <WidgetPortal>
        <Suspense fallback={<div>loading</div>}>
          <Widget setIsOpen={setIsOpen} />
        </Suspense>
      </WidgetPortal>
    )

  return <ClosedWidgetButton setIsOpen={setIsOpen} />
}

export default WidgetOpenHOC
