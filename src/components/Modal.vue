<template>
    <teleport to="body">
        <div class="backdrop" v-if="visible">
            <div class="modal">
                <header class="model__header">
                    <slot name="header"> </slot>
                    <i class="icon">x</i>
                </header>
                <div class="modal__body">
                    <slot name="body"></slot>
                </div>
                <div class="modal__footer">
                    <slot name="footer">
                        <button @click="ok">OK</button>
                        <button @click="close">Cancel</button>
                    </slot>
                </div>
            </div>
        </div>
    </teleport>
</template>
<script>
export default {
    name: "Modal",
    emits: {
        close: null,
        ok: null,
    },
    props: {
        visible: {
            type: Boolean,
            required: true,
            default: true,
        },
    },
    setup(props, ctx) {
        function close() {
            ctx.emit("update:visible", false);
            ctx.emit("close");
        }
        function ok() {
            ctx.emit("update:visible", false);
            ctx.emit("ok");
        }
        return {
            close,
            ok,
        };
    },
};
</script>
<style lang="scss" scoped>
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.65);
    display: flex;
    //   align-content: center;
    flex-direction: column;
    align-items: center;

    .modal {
        position: relative;
        top: 100px;
        width: 600px;
        background: #ffffff;
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        flex: 0;
        .model__header {
            display: flex;
            padding: 16px;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #f2f2f2;
            * {
                margin: 0;
                padding: 0;
            }
            .icon {
                margin-left: auto;
                font-style: normal;
            }
        }
        .modal__body {
            padding: 20px;
        }
        .modal__footer {
            padding: 20px;
            border-top: 1px solid #f2f2f2;
            justify-content: flex-end;
            display: flex;
            button {
                outline: 0 none;
                background: #ffffff;
                border-radius: 4px;
                border: 1px solid #cccccc;
                padding: 8px 12px;
                & + button {
                    margin-left: 20px;
                }
            }
        }
    }
}
</style>
