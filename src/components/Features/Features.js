import React from 'react';
import FeatureItem from './FeatureItem';
import './Features.scss';
import { AiOutlineFundProjectionScreen,AiOutlineBell } from 'react-icons/ai';
import { GoSettings } from 'react-icons/go';
import { MdFlag, MdHighQuality, MdPeople, MdPhoneAndroid, MdPoll, MdSettingsRemote } from 'react-icons/md';


export default function Features() {
  return (
    <div className="features">
      <h2 className="features__heading">Features That Will Tailor Your Experience</h2>
      <div className="features__container">
      <div className="features__container__item">
        <FeatureItem
        icon={<AiOutlineFundProjectionScreen/>}
        text="Video highlights for every Premier League and English Football League game"
        />
      </div>
      <div className="features__container__item">
        <FeatureItem
        icon={<AiOutlineBell/>}
        text="Notifications for your teams, including in-game goal clips and Premier League match highlights for Sky TV subscribers with Guardian."
        />
      </div>
      <div className="features__container__item">
        <FeatureItem
        icon={<MdHighQuality/>}
        text="Brand new video section including dedicated areas for your chosen team, trending video, Premier League, Football league and other major leagues"
        />
      </div>
      <div className="features__container__item">
        <FeatureItem
        icon={<MdFlag/>}
        text="Match pages showing live scores, commentary, team line-ups and enhanced match stats to keep you up-to-date on all the action"
        />
      </div>
      <div className="features__container__item">
        <FeatureItem
        icon={<MdPhoneAndroid/>}
        text="The new picture in picture video mode means you can watch goals, manager interviews and more whilst using other areas of the app – so you don’t need to miss any of the action"
        />
      </div>
      <div className="features__container__item">
        <FeatureItem
        icon={<MdPoll/>}
        text="Live updated league tables including all the domestic, European and major leagues and tournaments"
        />
      </div>
      <div className="features__container__item">
        <FeatureItem
        icon={<MdSettingsRemote/>}
        text="The Guardian News Vidiprinter. Follow the goals as they go in with our new and improved Vidiprinter"
        />
      </div>
      <div className="features__container__item">
        <FeatureItem
        icon={<MdPeople/>}
        text="Match reports, previews and a dedicated news section"
        />
      </div>
      <div className="features__container__item">
        <FeatureItem
        icon={<GoSettings/>}
        text="And you can achieve super-fan status by personalising your home page with up-to-the-minute information on your team."
        />
      </div>
      </div>
    </div>
  )
}
