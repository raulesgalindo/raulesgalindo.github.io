import React from 'react';
import Header from "../../components/header/HeaderOne";
import FooterThree from "../../components/footer/FooterThree";
import TemplateBlogDetails from "../../templates/blog-details";
import SideHeader from "../../components/SideHeader";

const BlogDetailsRightSidebarPage = () => {
    return (
        <div>
            <Header classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <TemplateBlogDetails sidebarPosition="right"/>
            <FooterThree position={'fixed'}/>
        </div>
    );
};

export default BlogDetailsRightSidebarPage;