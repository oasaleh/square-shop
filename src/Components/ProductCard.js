/* ------------------------------ imports ------------------------------ */
// style
import styled from 'styled-components';

/* ------------------------- styled-components ------------------------- */
const ProductCard = styled.div`
  width: 170px;
  height: 210px;
  border: 0.5px solid #lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 15px;
  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.2) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 4px 2px;
`;
const Title = styled.h1`
  font-size: 1em;
  text-align: center;
  color: ${(props) => props.textColor || 'palevioletred'};
`;
const AddToCartButton = styled.button`
  cursor: pointer;
`;
/* ----------------------------- component ----------------------------- */
function ItemCard({ item, price, addItem }) {
  return (
    <ProductCard>
      <div
        style={{
          backgroundColor: item.name,
          width: '80px',
          height: '80px',
          borderRadius: '7px',
        }}
      />
      <Title textColor={item.name}>{item.name} Square</Title>
      <p>${item.price}</p>
      {/* why do I have to make it an anonymous function inside onClick? */}
      <AddToCartButton onClick={() => addItem({ ...item, quantity: 1 })}>
        Add to Cart
      </AddToCartButton>
    </ProductCard>
  );
}

export default ItemCard;
