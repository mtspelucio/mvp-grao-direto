import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    
    .content{
        padding: 2rem 2rem 0 2rem;

        .search{
            width: 100%;
            display: flex; 
            justify-content: end;
            align-items: center;
            position: relative;

            input{
                width: 32rem;
                height: 2.4rem;
                border: 2px solid var(--gray-100);
                border-radius: .4rem;
                padding: 1rem;
                    
                &:hover{
                    border: 2px solid var(--primary);
                    transition: .5s;
                }
                &::placeholder{
                    font-weight: bold;
                    color: var(--gray-100);
                }
            }

            img{
                width: 12pt;
                position: absolute;
                right: .8rem;
                cursor: pointer;
            }
        }

        .restaurants{
            display: flex;
            flex-wrap: wrap;
            gap: 1.6rem;
            padding: 4rem 0;
            justify-content: center;
        }

        .restaurants:has(#item:hover) #item:not(:hover){
            opacity: .6;
            scale: .98;
            transition: .5s;
        }
    }
`;
