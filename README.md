jQuery VimeoThumb
==================

Small jQuery plugin to easily display video thumbnails from VIMEO.

## Usage

Include script after the jQuery library:

```html
<script src="/path/to/jquery-vimeothumb.min.js"></script>
```

Provide a placeholder image source and include the vimeo identifier using the **data-vimeo-id** attribute. You can also specify the **small**, **medium** or **large** class to change the thumbnail size ( default: medium ).

```html
<img src="http://placehold.it/640x360" data-vimeo-id="445774481" class="large" />
```

Replace placeholder images by Vimeo thumbnail

```javascript
$('img').VimeoThumb();
```

The plugin will go through all elements, perform a JSONP call to the Vimeo API and finally replace the src attribute by the video thumbnail url. If the src has already a url cotaining 'vimeo' it will skip it.

### Options

* **idSelectorName**: (optional) The attribute name containing the vimeo identifier  *(default: 'data-vimeo-id')*
* **vimeoPatternUrl**: (optional) Vimeo's video API url pattern *(default: 'http://vimeo.com/api/v2/video/%id.json?callback=?')*
