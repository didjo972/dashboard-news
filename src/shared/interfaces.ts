export interface ILink {
    href: string;
    type: string;
    rel: string;
    templated: boolean;
}

export interface IDisplayInformation {
    direction: string;
    code: string;
    network: string;
    links: ILink[];
    color: string;
    name: string;
    physical_mode: string;
    headsign: string;
    label: string;
    equipments: any[];
    text_color: string;
    commercial_mode: string;
    description: string;
}

export interface ICcommercialModes {
    id: string;
    name: string;
}

export interface IPhysiqualModes {
    id: string;
    name: string;
}

export interface ICoord {
    lat: string;
    lon: string;
}

export interface IAdministrativeRegions {
    insee: string;
    name: string;
    level: number;
    coord: ICoord;
    label: string;
    id: string;
    zip_code: string;
}

export interface IStopArea {
    codes: Array<{
        type: string;
        value: string
    }>;
    name: string;
    links: ILink[];
    coord: ICoord;
    label: string;
    administrative_regions: IAdministrativeRegions[];
    timezone: string;
    id: string
}

export interface IDirection {
    embedded_type: string;
    stop_area: IStopArea;
    quality: number;
    name: string;
    id: string
}

export interface IGeojson {
    type: string;
    coordinates: any[]
}

export interface ILine {
    code: string;
    name: string;
    links: ILink[];
    color: string;
    geojson: IGeojson;
    text_color: string;
    codes: any[];
    closing_time: string;
    opening_time: string;
    id: string;
}

export interface IStopDateTime {
    links: ILink[];
    arrival_date_time: string;
    additional_informations: any[];
    departure_date_time: string;
    base_arrival_date_time: string;
    base_departure_date_time: string;
    data_freshness: string;
}

export interface IResponseFetchDepartures {
    context: { timezone: string; current_datetime: string };
    departures: IDepartures[];
    disruptions: any[];
    exceptions: any[];
    feed_publishers: any[];
    links: ILink[];
    notes: any[];
}

export interface IDepartures {
    display_informations: IDisplayInformation;
    stop_point: IStopPoint;
    route: IRoute;
    stop_date_time: IStopDateTime;
    links: ILink[];
}

export interface IStopPoint {
    commercial_modes: ICcommercialModes[];
    name: string;
    links: ILink[];
    physical_modes: IPhysiqualModes[];
    coord: ICoord;
    label: string;
    equipments: any[];
    administrative_regions: IAdministrativeRegions[];
    id: string;
    stop_area: IStopArea;
}

export interface IRoute {
    direction: IDirection;
    name: string;
    links: ILink[];
    physical_modes: IPhysiqualModes[];
    is_frequence: string;
    geojson: IGeojson;
    direction_type: string;
    line: ILine;
    id: string;
}

