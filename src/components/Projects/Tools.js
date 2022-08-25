import React from "react";
import styled from "styled-components";
import PythonIcon from "../../images/PythonIcon";
import PlotlyIcon from "../../images/PlotlyIcon";
import ShopifyIcon from "../../images/ShopifyIcon";
import ComputerIcon from "../../images/ComputerIcon";
import ThreeIcon from "../../images/ThreeIcon";
import JSIcon from "../../images/JSIcon";
import ReactIcon from "../../images/ReactIcon";


const ToolsDiv = styled.div`
display: flex; 
justify-content: space-around;
align-items: center;
height: 15%;
margin-right: 0;
width: auto;
background-color: #104966;
border-radius: 3px;
padding: 1rem;
`

const ToolSpan = styled.span`
display: inline-flex;
`

const ToolText = styled.h4`
margin-left: 10px;
color: #a8b2d1;
`

const iconStyle = {
    height: '20px',
    width: '20px',
    fill: '#a8b2d1'
}



const Tools = ({toolsList}) => {

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
            default:
                return <ComputerIcon style={iconStyle} />
        }
    }

    function buildTool(tool) {
        console.log(tool)
        return (
            <ToolSpan key={tool}>
                {iconPicker(tool)}
                <ToolText>{tool}</ToolText>
            </ToolSpan>
        )
    }

    return (
        <ToolsDiv>
            {toolsList && toolsList.map(tool => buildTool(tool))}
        </ToolsDiv>
    )
}

export default Tools;