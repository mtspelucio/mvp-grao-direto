import styled from 'styled-components';

export const Container = styled.div`
    width: 18rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    border: 2px solid var(--gray-100);
    border-radius: 10px;
    box-shadow: 0 0 10px var(--gray-100);
    padding: 1.2rem;
    cursor: pointer;

    &:hover{
        border: 2px solid var(--primary);
        transition: .5s;

        div{
            border-top: 2px solid var(--primary);
            transition: .5s;
        }
    }

    img{
        width: 8rem;
        object-fit: contain;
    }

    div{
        width: 100%;
        display: flex;
        flex: 1;
        flex-direction: column;
        font-size: 14pt;
        color: var(--gray-200);
        border-top: 2px solid var(--gray-100);
        padding-top: 1rem;

        h4{
            margin-bottom: 1rem;
        }

        p{
            display: -webkit-box;
            -webkit-line-clamp: 3;
            overflow: hidden;
            -webkit-box-orient: vertical;
        }

        
        span{
            color: var(--primary);
            width: 100%;
            display: flex;
            flex-direction: column;
            flex: 1;
            align-items: end;
            justify-content: end;
        }
    }
`;
