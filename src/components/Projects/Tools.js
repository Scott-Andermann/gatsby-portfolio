import React from "react";
import styled from "styled-components";
import PythonIcon from "../../images/PythonIcon";
import PlotlyIcon from "../../images/PlotlyIcon";
import ShopifyIcon from "../../images/ShopifyIcon";
import ComputerIcon from "../../images/ComputerIcon";
import ThreeIcon from "../../images/ThreeIcon";
import JSIcon from "../../images/JSIcon";
import ReactIcon from "../../images/ReactIcon";
import CSSIcon from "../../images/CSSIcon";
import MLIcon from "../../images/MLIcon";
import NodeIcon from "../../images/NodeIcon";

const ToolsDiv = styled.div`
display: flex; 
margin-left: auto;
margin-right: 0;
justify-content: space-between;
align-items: center;
width: 320px;
padding: 1rem;
padding-right: 0;
@media (max-width: 750px) {
    width: 100%;
    padding: 1rem 0;
    margin: 0 auto;
    flex-direction: column;

}
`

const ToolSpan = styled.span`
display: inline-flex;
@media (max-width: 1024px) {
    margin: .25rem 0;
}
`

const ToolText = styled.p`
margin-left: 10px;
opacity: 0.6;
`

const iconStyle = {
    height: '20px',
    width: '20px',
    fill: '#FFFFFF',
    fillOpacity: 0.6
}



const Tools = ({toolsList, className}) => {

    const iconPicker = (tool) => {
        switch (tool) {
            case 'Python':
                return <PythonIcon style={iconStyle} />
            case 'Plotly':
                return <PlotlyIcon style={iconStyle} />
            case 'ShopifyAPI':
                return <ShopifyIcon style={iconStyle} />
            case 'ThreeJS':
                return <ThreeIcon style={iconStyle} />
            case 'Javascript':
                return <JSIcon style={iconStyle} />
            case 'React':
                return <ReactIcon style={iconStyle} />
            case 'CSS':
                return <CSSIcon style={iconStyle} />
            case 'Machine Learning':
                return <MLIcon style={iconStyle} />
            case 'NodeJS':
                return <NodeIcon style={iconStyle} />
            default:
                return <ComputerIcon style={iconStyle} />
        }
    }

    function buildTool(tool) {
        return (
            <ToolSpan key={tool}>
                {iconPicker(tool)}
                <ToolText>{tool}</ToolText>
            </ToolSpan>
        )
    }

    return (
        <ToolsDiv className={className}>
            {toolsList && toolsList.map(tool => buildTool(tool))}
        </ToolsDiv>
    )
}

export default Tools;