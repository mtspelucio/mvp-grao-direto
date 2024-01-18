import styled from 'styled-components';

export const Container = styled.nav`
    width: 100%;
    padding: 1rem 4rem;
    box-shadow: 0 4px 10px var(--gray-100);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    color: var(--gray-200);

    div{
        display: flex;
        flex-direction: column;
        align-items: end;

        p{
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }

        span{
            display: flex;
            justify-content: center;
            gap: .4rem;
            color: var(--primary);
            cursor: pointer;

            img{
                width: 12pt;
            }

            span{
                display: -webkit-box;
                -webkit-line-clamp: 1;
                overflow: hidden;
                -webkit-box-orient: vertical;
            }
        }
    }

    button{
        font-size: 12pt;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .4rem;
        border: none;
        background: transparent;
        color: var(--primary);
        cursor: pointer;

        &:hover{
            font-size: 14pt;
            transition: .5s;
            img{
                width: 14pt;
            }
        }

        img{
            width: 12pt;
            object-fit: cover;
        }
    }

    @media (max-width: 425px) {
        padding: 1rem 2rem;
    }
    @media (max-width: 380px) {
        flex-direction: column;

        div{
            align-items: center;
        }
    }
`;
