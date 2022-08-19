import { withRouter } from "react-router-dom"
const Test = () => {
    return (
        <div>
            <h1>Test Page</h1>
            <figure class="media">
                <oembed url="https://twitter.com/_DevAkshi__/status/1433633211624476672?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1433633211624476672%7Ctwgr%5E%7Ctwcon%5Es1_&amp;ref_url=https%3A%2F%2Fwww.scoopwhoop.com%2Fentertainment%2Fanupamaa-finding-love-post-divorce-as-middle-aged-woman-anuj-kapadia-twitter%2F">
                </oembed>
            </figure>
            <p>&nbsp;</p>
            <figure class="media">
                <oembed url="https://www.instagram.com/p/CTSGTgfqSuo/?utm_source=ig_embed&amp;ig_rid=ed8d1047-1b1f-46de-bd12-99e42e03750a">
                </oembed>
            </figure>
            <p>&nbsp;</p>
            <figure class="media">
                <oembed url="https://www.youtube.com/watch?v=sNO_VKkuj8I">
                </oembed>
            </figure>
          
        </div>
    );
}

export default withRouter(Test);