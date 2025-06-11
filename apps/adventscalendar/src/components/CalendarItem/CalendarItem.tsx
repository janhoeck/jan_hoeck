import clsx from 'clsx'
import React, { HTMLAttributes } from 'react'
import CalendarTilesConfiguration from '../../tools/types/CalendarTileConfiguration'
import styles from './calendarItem.module.scss'

export interface CalendarItemProps extends HTMLAttributes<HTMLDivElement> {
  item: CalendarTilesConfiguration
  variant?: 'closed' | 'open'
}

export const CalendarItem = (props: CalendarItemProps) => {
  const { className = {}, item, variant = 'closed', onClick, ...restProps } = props

  return (
    <div
      className={clsx(
        {
          [styles.clickable as string]: typeof onClick === 'function',
          [styles.flip as string]: variant === 'open',
          [styles.important as string]: item.priority === 'important',
        },
        styles.root,
        className
      )}
      onClick={onClick}
      {...restProps}
    >
      <div className={clsx(styles.content)}>
        <div className={clsx(styles.front)}>
          <span className={clsx(styles.text)}>{item.day}</span>
        </div>
        <div className={clsx(styles.back)}>
          <span className={clsx(styles.text)}>{item.day}</span>
        </div>
      </div>
    </div>
  )
}
