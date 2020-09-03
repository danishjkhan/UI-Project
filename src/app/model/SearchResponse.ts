    export class Original {
        height: string;
        width: string;
        url: string;
    }

    export class Downsized {
        height: string;
        width: string;
        url: string;
    }

    export class Images {
        original: Original;
        downsized: Downsized;
    }

    export class Datum {
        title: string;
        images: Images;
    }

    export class Pagination {
        total_count: number;
        count: number;
        offset: number;
    }

    export class Meta {
        status: number;
        msg: string;
        response_id: string;
    }

    export class Response {
        data: Datum[];
        pagination: Pagination;
        meta: Meta;
    }