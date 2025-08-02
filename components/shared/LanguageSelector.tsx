import Flag from "react-world-flags"

type SelectorProps = {
  currentLocale: string
  onSelect: (locale: string) => void
}

const languages = [
  { code: "NL", label: "Dutch", locale: "nl" },
  { code: "UA", label: "Ukrainian", locale: "uk" },
  { code: "GB", label: "English", locale: "en" },
]

export function LanguageSelector({ currentLocale, onSelect }: SelectorProps) {
  return (
    <div className="flex gap-3 items-center">
      {languages.map(({ code, label, locale }) => (
        <button
          key={locale}
          onClick={() => onSelect(locale)}
          title={label}
          className={`p-1 rounded transition ${
            currentLocale === locale
              ? "ring-2 ring-white"
              : "opacity-80 hover:opacity-100"
          } cursor-pointer`}
        >
          <Flag
            code={code}
            style={{ width: "28px", height: "20px", display: "block" }}
          />
        </button>
      ))}
    </div>
  )
}
