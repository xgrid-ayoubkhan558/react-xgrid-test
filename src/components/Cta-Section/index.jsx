import { useState } from "react";

import css from "./CtaSection.module.scss"
import Cta2 from "../cta2";

function CtaSection() {
    const [clickCount, setClickCount] = useState(0);

    return (
        <section className={css.section}>
            

            <Cta2 count={clickCount} />
            
            <button
                onClick={() => setClickCount(clickCount + 2)}
                className={css.btn}
            >
                Button {clickCount}
            </button>
        </section>
    )
}

export default CtaSection;