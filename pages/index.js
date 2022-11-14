import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import Favs from "../src/components/Favs";

function HomePage() {
    return ( 
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1

            }}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists}>
                    Conteúdo
                </Timeline>

                <Favs />
                
            </div>
        </>
    );
}
  
export default HomePage

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info{
        margin-top: 50px;
        display: flex;
        align-items: center;
        width:100%;
        padding: 16px 32px;
        gap:16px;
    }
    
    #banner{
        all: unset;
        width: 100%;
        object-fit: cover;
        height: 40vh;
    }
`;

function Header(){
    return (
        <StyledHeader>
            <img id="banner" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>

                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>

                </div>
            </section>

        </StyledHeader>
    );
}

function Timeline(propriedades) {
    const playlistNames = Object.keys(propriedades.playlists);

    // Statement
    // Retorno por expressão

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
                return (
                    <section>
                        <h2>
                            {playlistName}
                        </h2>
                        
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}