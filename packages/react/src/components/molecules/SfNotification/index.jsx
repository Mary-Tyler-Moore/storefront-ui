import React from 'react';
import { SfIcon } from '../../atoms';
import { CSSTransition } from 'react-transition-group';
import classnames from 'classnames';
import '../../utilities/transitions/transitions.scss';
import '@storefront-ui/shared/styles/components/SfNotification.scss';

export const SfNotification = ({ visible, title, type, action, transition, message, onClose, onAction }) => {
  const icon = () => {
    switch (type) {
      case 'success':
        return 'added_to_cart';
      case 'danger':
        return 'info_shield';
      default:
        return 'info_circle';
    }
  };

  return (
    <CSSTransition in={visible} classNames={transition} timeout={300} unmountOnExit>
      <div
        className={classnames({
          'sf-notification': true,
          [`sf-notification--${type}`]: true,
        })}
      >
        {icon && <SfIcon classname="sf-notification__icon" icon={icon()} size="lg" color="white" v-if="!!icon" />}
        <div>
          {title && <div className="sf-notification__title">{title}</div>}
          {message && <span class="sf-notification__message">{message}</span>}
          {action && (
            <button className="sf-notification__action" onClick={onAction}>
              {action}
            </button>
          )}
        </div>
        <SfIcon onClick={onClose} classname="sf-notification__close" icon="cross" color="white" size="14px" />
      </div>
    </CSSTransition>
  );
};

SfNotification.defaultProps = {
  /**
   * Visibility of the Notification. Default value is false.
   */
  visible: false,
  /**
   * Title that will be displayed in Notification.
   */
  title: '',
  /**
   * Message that will be displayed in Notification.
   */
  message: '',
  /**
   * Action that will be displayed in Notification.
   */
  action: '',
  /**
   * Notification type ("secondary", "info", "success", "warning", "danger"). Check "Knobs" section to see how they look like.
   */
  type: function(value) {
    return ['secondary', 'info', 'success', 'warning', 'danger'].includes(value);
  },
  transition: 'fade',
};