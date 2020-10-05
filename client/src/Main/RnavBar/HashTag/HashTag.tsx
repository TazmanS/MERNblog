import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllHashTag} from '../../../actions/hashTag'
import {findArticlesByHashTag} from '../../../actions/hashTag'

interface HashTag {
    getAllHashTag(): void,
    hashTags: [],
    findArticlesByHashTag(hashTag): void
}


const HashTag:React.FC<HashTag> = ({getAllHashTag, hashTags, findArticlesByHashTag}) => {

    useEffect(() => {
        getAllHashTag()
    }, [getAllHashTag])

    const body = hashTags.map((el, i) => {
        return (
            <Link key={i}
                to="/articlesbytag"
                onClick={() => findArticlesByHashTag(el)}
            > #{el} </Link>
        )
    })

    return (
        <div>
            Несколько тегов со статей: {body}
        </div>
    )
}

function mapStateToProps(state) {
    return{
        hashTags: state.hashTag.hashTags
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllHashTag: () => dispatch( getAllHashTag() ),
        findArticlesByHashTag: hashTag => dispatch( findArticlesByHashTag(hashTag) )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HashTag)