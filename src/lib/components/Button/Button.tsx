import React, { FC } from 'react';
import cx from 'classnames';
import './styles.css';
import 'stream-chat-react/dist/css/index.css'

export interface IButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  text?: string;
}

export const Button: FC<IButtonProps> = ({ onClick, disabled, className, text }) => (
  <>
    <button type="button" className={cx('button', className)} onClick={onClick} disabled={disabled}>
      {text}
    </button>
    <ul className="str-chat__ul"><li><div className="str-chat__date-separator"><hr className="str-chat__date-separator-line" /><div className="str-chat__date-separator-date">Today at 5:49 PM</div></div></li><li className="str-chat__li str-chat__li--single"><div className="str-chat__message-commerce str-chat__message-commerce--right
						str-chat__message-commerce--regular
						str-chat__message-commerce--has-text
						
            
            str-chat__message-commerce--single" data-testid="message-commerce-wrapper"><div className="str-chat__avatar str-chat__avatar--circle" data-testid="avatar" title="Kevin Rosen"></div><div className="str-chat__message-commerce-inner"><div className="str-chat__message-commerce-text"><div className="str-chat__message-commerce-text-inner" data-testid="message-text-inner-wrapper"><div><p>I would like to learn more about the company</p></div></div><div className="str-chat__message-commerce__actions" data-testid="message-options"><div className="str-chat__message-commerce__actions__action str-chat__message-commerce__actions__action--reactions" data-testid="message-reaction-action"><svg height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill-rule="evenodd"><path d="M6 1.2C3.3 1.2 1.2 3.3 1.2 6c0 2.7 2.1 4.8 4.8 4.8 2.7 0 4.8-2.1 4.8-4.8 0-2.7-2.1-4.8-4.8-4.8zM0 6c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6z"></path><path d="M5.4 4.5c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9zM8.4 4.5c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9zM3.3 6.7c.3-.2.6-.1.8.1.3.4.8.9 1.5 1 .6.2 1.4.1 2.4-1 .2-.2.6-.3.8 0 .2.2.3.6 0 .8-1.1 1.3-2.4 1.7-3.5 1.5-1-.2-1.8-.9-2.2-1.5-.2-.3-.1-.7.2-.9z"></path></g></svg></div></div></div><div className="str-chat__message-commerce-reply-button"></div><div className="str-chat__message-commerce-data"><time className="str-chat__message-commerce-timestamp" datetime="Mon May 31 2021 17:49:21 GMT+0100 (Western European Summer Time)" title="Mon May 31 2021 17:49:21 GMT+0100 (Western European Summer Time)">5:49 PM</time></div></div></div></li></ul>
  </>
);
