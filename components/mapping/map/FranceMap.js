import React from "react";
import { SVGMap, France } from "react-svg-map";
import "react-svg-map/lib/index.css";
import { useRouter } from 'next/router'

const FranceMap = (props) => {
    const router = useRouter()
    const _handleChooseLocation = (loc) => {
        const region = loc ?.target ?.attributes[1] ?.nodeValue;
        console.log("REGION SELECTED =", region)
        router.push(`/adherents/regions/${region}`)
    }
    return (
        <div style={{ maxWidth: '800px' }}>
            <SVGMap
                map={France}
                // onLocationClick={(locationRole) => _handleChooseLocation(locationRole)}
                onLocationClick={(loc) => _handleChooseLocation(loc)}
            />
        </div>
    )
}

export default FranceMap