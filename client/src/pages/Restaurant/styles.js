import styled from 'styled-components';

export const Container = styled.div`
    main{
        padding: 4rem;
        
        header{
            display: flex;
            align-items: center;
            gap: 1rem;
            padding-bottom: 2.4rem;
            border-bottom: 2px solid var(--gray-100);           

            .icon{
                background: var(--white);
                width: 5rem;
                height: 5rem;
                border-radius: 100%;
                border: 2px solid var(--gray-100);
                display: flex;
                align-items: center;
                justify-content: center;

                img{
                    width: 3rem;
                    object-fit: contain;
                }
            }

            .infoRestaurant{
                color: var(--gray-200);
                font-size: 16pt;

                p:first-child{
                    font-weight: bold;
                }
            }
        }

        .contentFood{
            padding-top: 4rem;
            h1{
                color: var(--gray-200);
            }
            .items{
                display: flex;
                gap: 2rem;
                flex-wrap: wrap;
                padding: 2rem 0;

                @media screen and (min-width: 1024px) {
                    gap: 1rem;
                }
            }
        }
        .items:has(#item:hover) #item:not(:hover){
            opacity: .6;
            scale: .98;
            transition: .5s;
        }
    }
`;
