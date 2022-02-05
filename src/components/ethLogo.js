import { ReactComponent as Logo} from '../eth_logo.svg'


const EthLogo = () => {
    return <div style={{ borderRadius: "9999px", marginRight: "auto", marginLeft: "auto", height: "35px", width: "35px", border: "1px solid lightgrey", alignProperty: "center" }}>
        <svg>
            <Logo height="32px" width="32px" style={{ marginRight: "auto", marginLeft: "auto" }} />
        </svg>
    </div>
}

export default EthLogo;

