import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  gap: 32px;
  padding: 24px 40px;
  justify-content: center;
`

export const LeftColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const RightColumn = styled.div`
  flex: 1;
`

export const PaymentMethodTabs = styled.div`
  display: flex;
  gap: 12px;
`

export const TabButton = styled.button<{ active?: boolean }>`
  flex: 1;
  padding: 12px;
  border: 2px solid ${({ active }) => (active ? '#000' : '#ccc')};
  background-color: ${({ active }) => (active ? '#000' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
`

export const CardForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const PixMessage = styled.div`
  padding: 24px;
  background-color: #f9f9f9;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  line-height: 1.6;
`

export const Label = styled.label`
  font-weight: bold;
  font-size: 14px;

  small {
    font-weight: normal;
    font-size: 12px;
    color: #555;
  }
`

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
`

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
`

export const Info = styled.p<{ small?: boolean }>`
  font-size: ${({ small }) => (small ? '12px' : '14px')};
  color: ${({ small }) => '#666'};
  margin: 0;
`

export const SummaryBox = styled.div`
  background: #f6f6f6;
  padding: 20px;
  border-radius: 10px;
`

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
`

export const Bold = styled.span`
  font-weight: bold;
`

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 12px 0;
`

export const ConfirmButton = styled.button`
  width: 100%;
  margin-top: 16px;
  background-color: #000;
  color: #fff;
  padding: 14px;
  border-radius: 8px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`
