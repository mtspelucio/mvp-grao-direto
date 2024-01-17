import styled from 'styled-components';


export const Container = styled.div`
    width: 80%;
    height: 100vh;
    overflow: hidden;

    &:before {
        content: "";
        width: 100%;
        height: 100vh;
        display: block;
        background: linear-gradient(to right, var(--black), transparent);
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
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 3rem;
        position: absolute;
        width: 50%;
        height: 100vh;
        color: var(--white);

        .banner{
            display: flex;
            width: 50%;
            align-items: center;
            justify-content: center;
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
            flex-direction: column;
            justify-content: center;
            align-items: center;

            form{
                width: 65%;
                display: flex;
                flex-direction: column;
                gap: 1.2rem;
                padding: 2.4rem 0 1rem 0;

                input{
                    height: 2.6rem;
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
                    height: 2.6rem;
                    border: none;
                    border-radius: .4rem;
                    padding: 1rem;
                    background: var(--primary);
                    color: var(--white);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 1rem;
                    cursor: pointer;

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
