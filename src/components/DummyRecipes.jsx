import React from 'react'

const DummyRecipes = () => {
    return (

        <div>
            <h2>recipes</h2>
            <ul><li>
                <span>id</span>
                <div className="img-wrap">
                    <img src="" alt="" />
                    </div>
                <h2>이름</h2>
                <ol>
                    {/*요리 만드는 순서 나오게 하기 */}

                    <li></li>
                </ol>
                {/* tag */}
                <span></span>
            </li>
            </ul>
        </div>
    )

}

export default DummyRecipes
