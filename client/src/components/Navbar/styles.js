import styled from 'styled-components';

export const Container = styled.nav`
    width: 100%;
    padding: 1rem 4rem;
    box-shadow: 0 4px 10px var(--gray-100);
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: .4rem;
    color: var(--gray-200);

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
`;
