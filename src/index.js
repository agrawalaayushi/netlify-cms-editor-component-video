const video = {
  label: "Video",
  id: "video",
  folder: "static/video",
  fields: [
    {
      label: "Video",
      name: "url",
      widget: "file",
      media_library: {
        allow_multiple: false
      }
    },
    {
      label: "Controls",
      name: "control",
      widget: "boolean",
      default: true
    },
    {
      label: "Loop",
      name: "loop",
      widget: "boolean",
      default: false
    },
    {
      label: "Autoplay",
      name: "autoplay",
      widget: "boolean",
      default: false
    },
    {
      label: "Mute",
      name: "muted",
      widget: "boolean",
      default: true
    },
    {
      label: "Poster",
      name: "poster",
      widget: "image",
      media_library: {
        allow_multiple: false
      }
    },
    {
      label: "Height",
      name: "height",
      widget: "number",
      valueType: "int",
      min: 300,
      default: 200
    },
    {
      label: "Width",
      name: "width",
      widget: "number",
      valueType: "int",
      min: 300,
      default: 300
    }
  ],
  pattern: /^{{< Video url=(.*) control=(.*) loop=(.*) autoplay=(.*) muted=(.*) height=(.*) width=(.*) poster=(.*) >}}$/,
  fromBlock: match =>
    match && {
      url: match[1],
      control: match[2],
      loop: match[3],
      autoplay: match[4],
      muted: match[5],
      height: match[6],
      width: match[7],
      poster: match[8]
    },
  toBlock: function(obj) {
    if (obj && obj.autoplay) obj.muted = true;
    return `{{< Video url=${obj.url} control=${obj.control} loop=${obj.loop} autoplay=${obj.autoplay} muted=${obj.muted} height=${obj.height} width=${obj.width} poster=${obj.poster} >}}`;
  },
  toPreview: function(obj) {
    console.log(obj);
    return `<video width=${obj.width} height=${obj.height} ${
      obj.control ? `controls` : `undefined`
    }  ${obj.loop ? `loop` : `undefined`}  ${obj.muted && `muted`} ${
      obj.autoplay ? `autoplay` : `undefined`
    } poster=${obj.poster}>
        <source src=${obj.url} type="video/webm"/>
        <source src=${obj.url} type="video/webm"/>
        <source src=${obj.url} type="video/mp4">
        </video>`;
  }
};

export const NetlifyCmsEditorComponentPill = video;
export default video;
