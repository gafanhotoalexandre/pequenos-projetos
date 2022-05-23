import { useState } from 'react';

interface PostFormProps {
  onAdd: (title: string, body: string) => Promise<void>;
}

export function PostForm({ onAdd }: PostFormProps) {
  const [addTitleText, setAddTitleText] = useState('');
  const [addBodyText, setAddBodyText] = useState('');

  function handleAddClick() {
    if (!(addTitleText && addBodyText)) {
      alert('Preencha todos os campos');
      return;
    }
    onAdd(addTitleText, addBodyText);
  }

  return (
    <fieldset className="border-2 mb-3 p-3">
      <legend className="px-2">Adicionar Novo Post</legend>

      <input
        type="text"
        className="block mb-2 rounded border"
        placeholder="Digite um título"
        onChange={(e) => setAddTitleText(e.target.value)}
        value={addTitleText}
      />

      <textarea
        className="block mb-2 rounded border"
        placeholder="Digite o corpo da mensagem"
        onChange={(e) => setAddBodyText(e.target.value)}
        value={addBodyText}
      />

      <button
        className="border rounded mb-2 py-3 px-4 text-white bg-blue-500 hover:bg-blue-400 transition"
        onClick={handleAddClick}
      >
        Adicionar
      </button>
    </fieldset>
  );
}
