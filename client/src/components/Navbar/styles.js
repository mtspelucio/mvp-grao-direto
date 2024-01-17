import styled from 'styled-components';

export const Container = styled.nav`
    width: 100%;
    padding: 1rem 4rem;
    box-shadow: 0 4px 10px var(--gray-100);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: .4rem;
    color: var(--gray-200);

    div{
        display: flex;
        flex-direction: column;
        align-items: end;
        span{
            display: flex;
            justify-content: center;
            gap: .4rem;
            color: var(--primary);
            cursor: pointer;

            img{
                width: 12pt;
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
`;
