import React from "react";
import { Collapse } from 'antd';
import {
    FlagOutlined,
    PushpinOutlined,
    GlobalOutlined,
    CodepenOutlined,
    RightSquareOutlined,
    LeftSquareOutlined,
    EnvironmentOutlined
} from '@ant-design/icons';

const { Panel } = Collapse;

const PlaceComponent =  (props) =>{
    const { 
        index,
        continent, 
        country, 
        countryCode, 
        name,
        region,
        long,
        lat
    } = props;

    const placeData = [
        {
            icon: GlobalOutlined,
            title: 'Region',
            value: region
        },
        {
            icon: PushpinOutlined,
            title: 'Continent',
            value: continent
        },
        {
            icon: FlagOutlined,
            title: 'Country',
            value: country
        },
        {
            icon: CodepenOutlined,
            title: 'Country Code',
            value: countryCode
        },
        {
            icon: RightSquareOutlined,
            title: 'Latitude',
            value: lat
        },
        {
            icon: LeftSquareOutlined,
            title: 'Latitude',
            value: long
        },
    ]

    return(
        <Collapse className="mb-3">
            <Panel header={`${index + 1}. ${name}`} key="1">
                <div className="grid grid-cols-1 md:gap-3 md:grid-cols-2 gap-2">
                    {placeData.map((data) =>{
                        return(
                            <p className="fs-400 flex md:gap-4 fix-bug">
                                <span className="flex items-center gap-2 md:gap-3"><data.icon /> {data.title} : </span>
                                <span>{data.value ? data.value : 'N.A'}</span>
                            </p>
                        )
                    })}
                    <div className="grid-span-2 flex items-center md:mt-3 gap-2">
                        <EnvironmentOutlined />
                        <a 
                            className="fs-400 clr-main" 
                            target="_blank" 
                            href={`http://maps.google.com/maps?z=12&t=m&q=loc:${lat}+${long}`}>
                            Visit Google Map Here!
                        </a>
                    </div>
                </div>
            </Panel>
        </Collapse>
    )
}

export default PlaceComponent;