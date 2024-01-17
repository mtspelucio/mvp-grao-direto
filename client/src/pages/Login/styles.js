import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;

    &:before {
        content: "";
        width: 100%;
        height: 80vh;
        display: block;
        background: linear-gradient(var(--black), transparent);
        position: absolute;
    }

    .background-img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
        z-index: -10;
        position: absolute;
    }
    
    .content{
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 50%;
        height: 100vh;
        padding: 4rem;
        color: var(--white);

        .banner{
            display: flex;
            width: 50%;
            align-items: center;
            gap: 2rem;
            cursor: default;

            p{
                font-size: 44pt;
                font-family: 'League Spartan', sans-serif;
            }

            img{
                width: 8rem;
                object-fit: contain;
            }
        }

        section{
            width: 100%;
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: center;
            
            .subtitle{
                font-size: 30pt;
                font-weight: 500;
                width: 70%;
                cursor: default;
            }

            form{
                width: 60%;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                padding: 2.4rem 0 1rem 0;

                input{
                    height: 2.4rem;
                    border: 2px solid var(--white);
                    border-radius: .4rem;
                    padding: 1rem;
                    
                    &:hover{
                        border: 2px solid var(--primary);
                        transition: .5s;
                    }
                    &::placeholder{
                        font-weight: bold;
                        color: var(--gray-200);
                    }
                }

                button{
                    height: 2.4rem;
                    border: none;
                    border-radius: .4rem;
                    padding: 1rem;
                    background: var(--primary);
                    color: var(--white);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: .6rem;
                    cursor: pointer;

                    img{
                        width: 12pt;
                    }

                    &:hover{
                        font-size: 12pt;
                        transition: .5s;
                    }
                }

            }

            a{
                color: var(--white);
                text-decoration: 2px underline var(--primary);
                cursor: pointer;
            }
            a,p{
                font-size: 10pt;
                font-weight: 300;
            }
        }
    }
`;
