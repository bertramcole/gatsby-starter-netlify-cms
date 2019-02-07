import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import CompanyPagePreview from './preview-templates/CompanyPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import CompanyPagePreview from './preview-templates/CompanyPagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('company', CompanyPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('company', CompanyPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
