import type { NextConfig } from "next";

const nextConfig: NextConfig = {/* config options here */
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"cdn.sanity.io"
            },
        ]
    },
    allowedDevOrigins:['192.168.1.166']
};

export default nextConfig;
