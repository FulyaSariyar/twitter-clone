import React from 'react'
import { HomeIcon, PopulerIcon, ReplyIcon } from '../icons/Icon'
import { ExploreIcon } from '../icons/Icon'
import { NotificationsIcon } from '../icons/Icon'
import { MessagesIcon } from '../icons/Icon'
import { BookmarksIcon } from '../icons/Icon'
import { ListsIcon } from '../icons/Icon'
import { ProfileIcon } from '../icons/Icon'
import { MoreIcon } from '../icons/Icon'
import { ImageIcon } from '../icons/Icon'
import { GIFIcon } from '../icons/Icon'
import { PollIcon } from '../icons/Icon'
import { EmojiIcon } from '../icons/Icon'
import { ScheduleIcon } from '../icons/Icon'
import { ReTweetIcon } from '../icons/Icon'
import { LikeIcon } from '../icons/Icon'
import { ShareIcon } from '../icons/Icon'
import { SearchIcon } from '../icons/Icon'


const Sidebar = () => {
  return (
    <div className="w-72 bg-blue-200">
      <h1>Sidebar</h1>
      <HomeIcon></HomeIcon>
      <ExploreIcon></ExploreIcon>
      <NotificationsIcon></NotificationsIcon>
      <MessagesIcon></MessagesIcon>
      <BookmarksIcon></BookmarksIcon>
      <ListsIcon></ListsIcon>
      <ProfileIcon></ProfileIcon>
      <MoreIcon></MoreIcon>
      <PopulerIcon className="w-7 h-7"></PopulerIcon>
      <ImageIcon className="w-7 h-7"></ImageIcon>
      <GIFIcon className="w-7 h-7"></GIFIcon>
      <PollIcon className="w-7 h-7"></PollIcon>
      <EmojiIcon className="w-7 h-7"></EmojiIcon>
      <ScheduleIcon className="w-7 h-7"></ScheduleIcon>
      <ReplyIcon className="w-7 h-7"></ReplyIcon>
      <ReTweetIcon className="w-7 h-7"></ReTweetIcon>
      <LikeIcon className="w-7 h-7"></LikeIcon>
      <ShareIcon className="w-7 h-7"></ShareIcon>
      <SearchIcon className="w-7 h-7"></SearchIcon>
    </div>
  )
}

export default Sidebar


