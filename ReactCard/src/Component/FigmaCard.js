import React from 'react'

export default function FigmaCard() {
  return (
    <>
        <div className="grandparent">
            <div className="parent">
                <div className="child1">
                    <div className="logo">
                        <img src="/images.png" alt=""/>
                    </div>
                    <div className="name">
                        Contoso
                    </div>
                    <div className="dots">
                        ...
                    </div>
                </div>
                <div className="child2">
                    <div className="p1">Thumbnail card</div>
                    <div className="p2">With an optional subtitle</div>
                </div>
                <div className="child3">
                    <div className="p3">
                        This is the body of the card, used to tell the user more
                        about the image above. This is an html block and can be edited.
                    </div>
                </div>
                <div className="child4">
                    <button className="btn" id="btn1">Button</button>
                    <button className="btn" id="btn2">Button</button>
                    <button className="btn" id="btn3">Button</button>
                    <button className="btn" id="btn4">Button</button>
                </div>
            </div>
        </div>

    </>
  )
}
