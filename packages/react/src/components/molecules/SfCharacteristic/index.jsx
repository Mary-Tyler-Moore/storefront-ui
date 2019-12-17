import React from 'react';
import { SfIcon } from '../../atoms';
import '@storefront-ui/shared/styles/components/SfCharacteristic.scss';

export const SfCharacteristic = ({ title, colorIcon, description, icon, sizeIcon, iconChildren, text }) => {
  return (
    <div className="sf-characteristic">
      {!iconChildren && (
        <div className="sf-characteristic__icon">
          <SfIcon color={colorIcon} size={sizeIcon} icon={icon} children={iconChildren} />
        </div>
      )}
      {iconChildren && iconChildren}
      <div className="sf-characteristic__text">
        {!text && (
          <>
            <div className="sf-characteristic__title">{title}</div>
            <div className="sf-characteristic__description">{description}</div>
          </>
        )}
        {text && text}
      </div>
    </div>
  );
};

SfCharacteristic.defaultProps = {
  colorIcon: 'primary',
  /** One of predefined SfIcon sizes.  */
  sizeIcon: 'xs',
  /** Svg file iconPath  */
  icon:
    'M19.2184 6.2442L15.0167 0.902344H4.20169L0 6.2442V20.9683H19.22L19.2184 6.2442ZM17.5565 5.88534H10.162V2.00942H14.4949L17.5565 5.88534ZM4.72206 2.00942H9.05503V5.88534H1.66054L4.72206 2.00942ZM1.07384 19.8602V6.95938H18.1432V19.8602H1.07384Z M10.5835 13.3125L11.0246 12.864H8.48131C8.1422 12.864 7.83755 12.8991 7.59909 13.0714C7.12488 13.4161 7.02287 13.9682 7.15797 14.3466C7.25997 14.76 7.56463 15.2084 8.1753 15.2434C8.68396 15.2784 9.19263 15.2784 9.73574 15.2784H10.516H10.8895C11.2286 15.2784 11.4657 15.5545 11.4657 15.8642C11.4644 16.1739 11.1942 16.415 10.8882 16.415H10.5146H9.76887H9.70132H8.98865C8.68398 16.415 8.41243 16.415 8.10642 16.38C7.12355 16.3113 6.30887 15.6218 6.07177 14.6213C5.80022 13.6222 6.17377 12.6217 7.02155 12.0359C7.53021 11.6912 8.07332 11.6225 8.54753 11.6225H11.0908L10.5477 11.1741C10.4457 11.0704 10.3782 10.898 10.3782 10.7607C10.3782 10.6234 10.4457 10.451 10.5477 10.3473C10.6511 10.245 10.8206 10.21 10.9557 10.21C11.0908 10.21 11.2604 10.2786 11.3624 10.3823L12.8208 11.8649C12.9228 11.9686 12.9904 12.141 12.9559 12.2783C12.9559 12.4156 12.8884 12.588 12.7864 12.6917L11.3955 14.1743C11.2935 14.278 11.1239 14.3466 10.9888 14.3466C10.8193 14.3466 10.6842 14.278 10.5822 14.1743C10.4802 14.0706 10.4126 13.8982 10.4126 13.7609C10.3795 13.5885 10.4471 13.4161 10.5835 13.3125Z',
  /** Characteristic title  */
  title: 'Title',
  /** Characteristic description  */
  description: 'Description',
};