//kullanıcı işlemlerini gerçekleştimek için (fireEvent)
//npm install --save-dev @testing-library/user-event @testing-library/dom

//ilk olarak test edilecek dosyayı çağır
import Form from ".";
//render, screen ve fireEvent komutunu çağır
import { render, screen, fireEvent } from "@testing-library/react";
//user-event library den kurdugumuz userEvent Çağrılır
import userEvent from "@testing-library/user-event";

//test metotu çağrılır.2 para metre alır
//kullanıcı işlemleri için await eklenmesi gerektiginden Fn async olur
//1.si neyin test edildigi
//2.si test işlem basamakları
test("Form: Click-Test işlemi Yapılıyor", async () => {
  //test edilecek Eleman render edilir
  render(<Form />);
  //farazi user türetilir
  const user = userEvent.setup();
  //test edilecek bileşen değişkene atanır
  // atama işlemi 3 şikilde olur
  //1. idsine göre 2. rolune göre 3.içindeki yazıya göre
  // data-testid=""
  const orderButton = screen.getByRole("button");
  const checkBox = screen.getByRole("checkbox");

  // olmasını(çalışmasını) istediğim işlem için expect kullanılır
  expect(orderButton).toBeDisabled();
  expect(checkBox).not.toBeChecked();

  await user.click(checkBox);
  expect(checkBox).toBeChecked();
  expect(orderButton).toBeEnabled();
  await user.click(checkBox);
  expect(orderButton).toBeDisabled();
});

test("Form:Hover-Test işlemi", async () => {
  render(<Form />);
  const user = userEvent.setup();
  const checkBox = screen.getByRole("checkbox");
  const orderButton = screen.getByRole("button");
  //exact= 100% uyum ister. Default ayarı true 'dur.
  const popup = screen.getByText("Size gerçekten birşey teslim etmiyeceğiz", {
    exact: false,
  });
  await user.click(checkBox);
  expect(checkBox).toBeChecked();
  expect(orderButton).toBeEnabled();
  fireEvent.mouseEnter(orderButton);
  expect(popup).toBeVisible();
  fireEvent.mouseLeave(orderButton);
  expect(popup).not.toBeVisible();
});
