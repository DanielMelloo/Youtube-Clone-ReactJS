import config from "../../config.json";
import styled from "styled-components";

const StyledFavs = styled.div`

    .body{
        font-family: sans-serif;
        
    }

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .favs-content{
        display: flex;
        align-items: flex-start;
        width:100%;
        padding: 16px;
        gap:16px;
    }

    .channels{
        display: flex;
        flex-direction: column;
    }

    p{
        font-size: 16px;
        margin-left: 16px;
        text-transform: capitalize;
    }

    .insets{
        margin-left: 0px;
    }
`;

export default function Favs() {
    return (

        <StyledFavs>
            <p>
                DanielTubes Favoritos
            </p>
            <section className="favs-content">
                <div className="Channels">
                    <img src={`https://github.com/${config.github}.png`} />
                    <p className="insets">{config.favorites.peas}</p>
                </div>

                <div className="Channels">
                    <img src={`https://github.com/${config.github}.png`} />
                    <p className="insets" >{config.favorites.mariosouto}</p>
                </div>  
         
            </section>

        </StyledFavs>  
    );
}