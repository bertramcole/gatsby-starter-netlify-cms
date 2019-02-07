import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import CompanyPagePreview from './preview-templates/CompanyPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('company', CompanyPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
