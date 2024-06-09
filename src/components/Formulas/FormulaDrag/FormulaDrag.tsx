import FormulaWrapper from "../FormulaWrapper/FormulaWrapper"

function FormulaDrag(): JSX.Element {
  return (
    <FormulaWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 81 13"
      >
        <defs>
          <path
            id="glyph-0-0"
            d="M5.36-5.938c-.141.141-.47.422-.47.594 0 .094.094.203.188.203s.14-.078.203-.14c.11-.14.344-.422.782-.64.062-.048.171-.095.171-.204 0-.11-.078-.156-.14-.203a1.034 1.034 0 01-.407-.563c-.03-.093-.062-.234-.203-.234-.14 0-.203.14-.203.219 0 .047.078.36.235.578h-3.36c-.156 0-.344 0-.344.203 0 .188.188.188.344.188zm0 0"
          ></path>
          <path
            id="glyph-0-1"
            d="M3.016-3.234h.968c.75 0 .829.156.829.437 0 .078 0 .188-.063.5-.031.047-.031.078-.031.11 0 .078.062.109.11.109.109 0 .109-.031.155-.203l.547-2.172c.032-.11.032-.125.032-.156a.117.117 0 00-.125-.11c-.094 0-.11.047-.141.219-.219.766-.438.953-1.297.953h-.906l.64-2.531c.094-.36.11-.39.547-.39h1.313c1.218 0 1.453.327 1.453 1.093 0 .234 0 .266-.031.547C7-4.703 7-4.688 7-4.656c0 .047.031.125.125.125.11 0 .11-.063.125-.25l.203-1.735c.031-.265-.016-.265-.266-.265h-4.89c-.188 0-.297 0-.297.203 0 .11.094.11.281.11.375 0 .656 0 .656.171 0 .047 0 .063-.062.25L1.562-.78c-.093.39-.109.469-.906.469-.172 0-.281 0-.281.187C.375 0 .5 0 .531 0c.281 0 1.031-.031 1.313-.031C2.172-.031 3 0 3.328 0c.094 0 .203 0 .203-.188 0-.078-.047-.109-.047-.109-.03-.016-.062-.016-.28-.016-.22 0-.267 0-.517-.015-.296-.031-.328-.078-.328-.203 0-.016 0-.078.047-.219zm0 0"
          ></path>
          <path
            id="glyph-0-2"
            d="M3.953-3.781c-.172 0-.297 0-.437.125a.53.53 0 00-.188.39c0 .25.188.36.375.36.281 0 .547-.25.547-.64 0-.485-.469-.86-1.172-.86-1.344 0-2.672 1.422-2.672 2.828C.406-.672.984.109 2.031.109c1.422 0 2.25-1.062 2.25-1.171 0-.063-.047-.141-.11-.141-.062 0-.077.031-.14.11-.781.984-1.875.984-1.984.984-.625 0-.906-.485-.906-1.094 0-.406.203-1.375.546-1.984.313-.579.86-1 1.407-1 .328 0 .719.125.86.406zm0 0"
          ></path>
          <path
            id="glyph-0-3"
            d="M.328 1.719c-.031.125-.031.14-.031.172 0 .14.11.265.281.265.203 0 .328-.187.344-.219.062-.078.375-1.421.64-2.5.204.407.516.672.985.672C3.719.11 5-1.297 5-2.78c0-1.063-.656-1.625-1.375-1.625-.969 0-2.016 1-2.313 2.218zM2.547-.11c-.703 0-.86-.797-.86-.891 0-.031.047-.234.079-.36.28-1.124.375-1.484.593-1.874.438-.735.938-.954 1.235-.954.375 0 .687.297.687.985 0 .547-.281 1.656-.547 2.14-.328.641-.812.954-1.187.954zm0 0"
          ></path>
          <path
            id="glyph-0-4"
            d="M4.672-3.703c0-.547-.266-.703-.438-.703-.25 0-.5.265-.5.484 0 .125.047.188.157.297.218.203.343.453.343.813 0 .421-.609 2.703-1.765 2.703-.516 0-.75-.344-.75-.875 0-.547.281-1.282.578-2.11.078-.172.125-.312.125-.5 0-.437-.313-.812-.813-.812-.937 0-1.312 1.453-1.312 1.531 0 .11.094.11.11.11.109 0 .109-.032.156-.188.296-1 .718-1.235 1.015-1.235.078 0 .25 0 .25.313 0 .25-.11.531-.172.703-.437 1.156-.562 1.61-.562 2.047 0 1.078.875 1.234 1.328 1.234 1.672 0 2.25-3.296 2.25-3.812zm0 0"
          ></path>
          <path
            id="glyph-0-5"
            d="M1.781-1.14C1.391-.485 1-.345.563-.314c-.125.016-.22.016-.22.204 0 .062.063.109.141.109.266 0 .579-.031.844-.031.344 0 .688.031 1 .031.063 0 .188 0 .188-.188 0-.109-.079-.124-.157-.124-.218-.016-.468-.094-.468-.344 0-.125.062-.235.14-.375l.766-1.266h2.5c.016.203.156 1.563.156 1.656 0 .297-.516.329-.719.329-.14 0-.234 0-.234.203C4.5 0 4.61 0 4.64 0c.407 0 .829-.031 1.235-.031.25 0 .89.031 1.14.031.048 0 .173 0 .173-.203 0-.11-.094-.11-.235-.11-.61 0-.61-.062-.64-.359l-.61-6.219c-.016-.203-.016-.25-.187-.25-.157 0-.204.079-.266.172zm1.203-1.47l1.954-3.296.328 3.297zm0 0"
          ></path>
          <path
            id="glyph-1-0"
            d="M2.266-4.36a.276.276 0 00-.282-.265c-.187 0-.39.188-.39.39 0 .11.078.266.281.266.188 0 .39-.203.39-.39zM.844-.811C.813-.72.78-.641.78-.516c0 .329.266.579.656.579.688 0 1-.954 1-1.063 0-.094-.093-.094-.109-.094-.094 0-.11.047-.14.125-.157.563-.454.844-.735.844-.14 0-.172-.094-.172-.25s.047-.281.11-.438c.078-.187.156-.375.218-.562.063-.172.329-.797.344-.89A.5.5 0 002-2.486c0-.328-.281-.593-.656-.593C.64-3.078.328-2.125.328-2c0 .078.094.078.125.078.094 0 .094-.031.125-.11.172-.593.485-.843.735-.843.109 0 .171.047.171.234 0 .172-.03.266-.203.704zm0 0"
          ></path>
          <path
            id="glyph-1-1"
            d="M3.984-4.625c0-.016.016-.11.016-.11 0-.046-.016-.109-.11-.109-.14 0-.718.063-.89.078-.047 0-.156.016-.156.157 0 .093.11.093.187.093.328 0 .328.063.328.11s0 .093-.015.156l-.406 1.594c-.141-.235-.376-.422-.72-.422-.89 0-1.796.984-1.796 1.984C.422-.406.875.063 1.484.063c.375 0 .704-.204.985-.485.125.422.531.484.719.484.25 0 .421-.14.546-.359.157-.281.25-.672.25-.703 0-.094-.093-.094-.109-.094-.11 0-.11.032-.156.219-.094.344-.219.75-.516.75-.172 0-.234-.156-.234-.344 0-.125.015-.187.047-.281zM2.5-.875c-.047.203-.203.344-.36.469-.062.062-.343.281-.64.281-.266 0-.516-.188-.516-.672 0-.375.204-1.14.375-1.422.313-.562.672-.656.86-.656.484 0 .625.531.625.61 0 .015-.016.078-.016.093zm0 0"
          ></path>
          <path
            id="glyph-2-0"
            d="M6.844-3.266c.156 0 .343 0 .343-.187 0-.203-.187-.203-.328-.203H.891c-.141 0-.329 0-.329.203 0 .187.188.187.329.187zm.015 1.938c.141 0 .329 0 .329-.203 0-.188-.188-.188-.344-.188H.89c-.141 0-.329 0-.329.188 0 .203.188.203.329.203zm0 0"
          ></path>
          <path
            id="glyph-2-1"
            d="M2.5-6.922l-1.344 1.36.172.171L2.5-6.406l1.14 1.015.172-.171zm0 0"
          ></path>
          <path
            id="glyph-3-0"
            d="M6.563-2.297c.171 0 .359 0 .359-.203 0-.188-.188-.188-.36-.188h-5.39c-.172 0-.344 0-.344.188 0 .203.172.203.344.203zm0 0"
          ></path>
          <path
            id="glyph-3-1"
            d="M1.578-7.125c0-.172 0-.36-.187-.36-.204 0-.204.188-.204.36v9.266c0 .171 0 .359.204.359.187 0 .187-.188.187-.36zm0 0"
          ></path>
          <path
            id="glyph-4-0"
            d="M3.516-1.266H3.28c-.015.157-.094.563-.187.625-.047.047-.578.047-.688.047H1.125c.734-.64.984-.844 1.39-1.172.516-.406 1-.843 1-1.5 0-.843-.734-1.359-1.624-1.359-.86 0-1.454.61-1.454 1.25 0 .344.297.39.376.39.156 0 .359-.124.359-.374 0-.125-.047-.375-.406-.375.218-.485.687-.641 1.015-.641.703 0 1.063.547 1.063 1.11 0 .609-.438 1.078-.656 1.328L.516-.266C.437-.203.437-.187.437 0h2.876zm0 0"
          ></path>
        </defs>
        <use x="1.112" y="7.198" xlinkHref="#glyph-0-0"></use>
        <use x="-0.355" y="9.718" xlinkHref="#glyph-0-1"></use>
        <use x="6.053" y="11.212" xlinkHref="#glyph-1-0"></use>
        <use x="12.137" y="9.718" xlinkHref="#glyph-2-0"></use>
        <use x="22.658" y="9.718" xlinkHref="#glyph-3-0"></use>
        <use x="30.407" y="9.718" xlinkHref="#glyph-0-2"></use>
        <use x="34.718" y="11.212" xlinkHref="#glyph-1-1"></use>
        <use x="39.362" y="9.718" xlinkHref="#glyph-0-3"></use>
        <use x="46.166" y="9.718" xlinkHref="#glyph-3-1"></use>
        <use x="48.551" y="9.718" xlinkHref="#glyph-0-0"></use>
        <use x="48.938" y="9.718" xlinkHref="#glyph-0-4"></use>
        <use x="53.771" y="11.212" xlinkHref="#glyph-1-0"></use>
        <use x="57.083" y="9.718" xlinkHref="#glyph-3-1"></use>
        <use x="59.855" y="4.714" xlinkHref="#glyph-4-0"></use>
        <use x="65.984" y="9.718" xlinkHref="#glyph-0-5"></use>
        <use x="73.832" y="9.718" xlinkHref="#glyph-2-1"></use>
        <use x="73.454" y="9.718" xlinkHref="#glyph-0-4"></use>
        <use x="78.287" y="11.212" xlinkHref="#glyph-1-0"></use>
      </svg>
    </FormulaWrapper>
  )
}

export default FormulaDrag
