import React, { FC, useState, useRef } from 'react';

interface ButtonProps {
  onClick: () => void;
}

interface TextNode {
  text: string;
}

interface Props {
    handleChange: '(event: ChangeEvent<HTMLInputElement>): void'
}

const Button: FC<ButtonProps> = ({ onClick }) => {
  const wasClicked = () => {
    console.log('text');
  };

  const [person, setPerson] = useState<number | string | null | undefined>('Hena');
  // We can declare types like this
  setPerson(5);

  const [paragraph, setParargraph] = useState<{ text: string }>({ text: 'hello' });
  // And like this.
  // setParargraph({text})

  const [some, setSome] = useState<TextNode>({ text: 'hey' });

  const inputRef = useRef<HTMLInputElement>(null);

  // PRO tip
  // When we hover over some value that ts is nervous of after : this is the part we care about. This is what should we passing in to this property
  // No matter what prop you trying pass in you can use this hover techinc to figure out what you should be doing
  
  const divRef = useRef<HTMLDivElement>(null)

  return (
    <div ref= {divRef}>
      <button onClick={onClick}>Click me to log "Clicked"</button>
      <button onClick={wasClicked}></button>
      <input ref={inputRef} />
    </div>
  );
};

export default Button;
