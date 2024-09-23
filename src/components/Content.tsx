import Block1 from "./content/Block1";
import Block2 from "./content/Block2";
import Block2_1 from "./content/Block2_1";
import Block3 from "./content/Block3";
import Block4 from "./content/Block4";
import Block5 from "./content/Block5";
import Block6 from "./content/Block6";
import Block7 from "./content/Block7";
import Block8 from "./content/Block8";

const Content = () => {
  return (
  <main className='h-custom-height-main w-full flex bg-primary items-center justify-center'>
    <div className='h-custom-height-main-div w-4/5 border'>
      <Block1 />
      <Block2 />
      <Block2_1 />
      <Block3 />
      <Block4 />
      <Block5 />
      <Block6 />
      <Block2_1 />
      <Block7 />
      <Block8 />
    </div>
  </main>
  );
}

export default Content
