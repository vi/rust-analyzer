var N = null;var sourcesIndex = {};
sourcesIndex["base_db"] = {"name":"","files":["change.rs","fixture.rs","input.rs","lib.rs"]};
sourcesIndex["cfg"] = {"name":"","files":["cfg_expr.rs","dnf.rs","lib.rs"]};
sourcesIndex["flycheck"] = {"name":"","files":["lib.rs"]};
sourcesIndex["hir"] = {"name":"","dirs":[{"name":"semantics","files":["source_to_def.rs"]}],"files":["attrs.rs","db.rs","diagnostics.rs","display.rs","from_id.rs","has_source.rs","lib.rs","semantics.rs","source_analyzer.rs","symbols.rs"]};
sourcesIndex["hir_def"] = {"name":"","dirs":[{"name":"body","files":["lower.rs","scope.rs"]},{"name":"item_tree","files":["lower.rs","pretty.rs"]},{"name":"nameres","files":["attr_resolution.rs","collector.rs","diagnostics.rs","mod_resolution.rs","path_resolution.rs","proc_macro.rs"]},{"name":"path","files":["lower.rs"]}],"files":["adt.rs","attr.rs","body.rs","builtin_attr.rs","builtin_type.rs","child_by_source.rs","data.rs","db.rs","dyn_map.rs","expr.rs","find_path.rs","generics.rs","import_map.rs","intern.rs","item_scope.rs","item_tree.rs","keys.rs","lang_item.rs","lib.rs","nameres.rs","path.rs","per_ns.rs","resolver.rs","src.rs","trace.rs","type_ref.rs","visibility.rs"]};
sourcesIndex["hir_expand"] = {"name":"","files":["ast_id_map.rs","builtin_attr_macro.rs","builtin_derive_macro.rs","builtin_fn_macro.rs","db.rs","eager.rs","fixup.rs","hygiene.rs","lib.rs","mod_path.rs","name.rs","proc_macro.rs","quote.rs"]};
sourcesIndex["hir_ty"] = {"name":"","dirs":[{"name":"diagnostics","dirs":[{"name":"decl_check","files":["case_conv.rs"]},{"name":"match_check","files":["deconstruct_pat.rs","pat_util.rs","usefulness.rs"]}],"files":["decl_check.rs","expr.rs","match_check.rs","unsafe_check.rs"]},{"name":"infer","files":["closure.rs","coerce.rs","expr.rs","pat.rs","path.rs","unify.rs"]}],"files":["autoderef.rs","builder.rs","chalk_db.rs","chalk_ext.rs","consteval.rs","db.rs","diagnostics.rs","display.rs","infer.rs","interner.rs","lib.rs","lower.rs","mapping.rs","method_resolution.rs","primitive.rs","tls.rs","traits.rs","utils.rs","walk.rs"]};
sourcesIndex["ide"] = {"name":"","dirs":[{"name":"doc_links","files":["intra_doc_links.rs"]},{"name":"hover","files":["render.rs"]},{"name":"prime_caches","files":["topologic_sort.rs"]},{"name":"syntax_highlighting","files":["format.rs","highlight.rs","highlights.rs","html.rs","inject.rs","injector.rs","macro_.rs","tags.rs"]},{"name":"typing","files":["on_enter.rs"]}],"files":["annotations.rs","call_hierarchy.rs","call_info.rs","doc_links.rs","expand_macro.rs","extend_selection.rs","file_structure.rs","fn_references.rs","folding_ranges.rs","goto_declaration.rs","goto_definition.rs","goto_implementation.rs","goto_type_definition.rs","highlight_related.rs","hover.rs","inlay_hints.rs","join_lines.rs","lib.rs","markdown_remove.rs","markup.rs","matching_brace.rs","moniker.rs","move_item.rs","navigation_target.rs","parent_module.rs","prime_caches.rs","references.rs","rename.rs","runnables.rs","shuffle_crate_graph.rs","ssr.rs","static_index.rs","status.rs","syntax_highlighting.rs","syntax_tree.rs","typing.rs","view_crate_graph.rs","view_hir.rs","view_item_tree.rs"]};
sourcesIndex["ide_assists"] = {"name":"","dirs":[{"name":"handlers","files":["add_explicit_type.rs","add_lifetime_to_type.rs","add_missing_impl_members.rs","add_missing_match_arms.rs","add_return_type.rs","add_turbo_fish.rs","apply_demorgan.rs","auto_import.rs","change_visibility.rs","convert_bool_then.rs","convert_comment_block.rs","convert_integer_literal.rs","convert_into_to_from.rs","convert_iter_for_each_to_for.rs","convert_to_guarded_return.rs","convert_tuple_struct_to_named_struct.rs","convert_while_to_loop.rs","destructure_tuple_binding.rs","expand_glob_import.rs","extract_function.rs","extract_module.rs","extract_struct_from_enum_variant.rs","extract_type_alias.rs","extract_variable.rs","fix_visibility.rs","flip_binexpr.rs","flip_comma.rs","flip_trait_bound.rs","generate_constant.rs","generate_default_from_enum_variant.rs","generate_default_from_new.rs","generate_delegate_methods.rs","generate_deref.rs","generate_derive.rs","generate_documentation_template.rs","generate_enum_is_method.rs","generate_enum_projection_method.rs","generate_from_impl_for_enum.rs","generate_function.rs","generate_getter.rs","generate_impl.rs","generate_is_empty_from_len.rs","generate_new.rs","generate_setter.rs","inline_call.rs","inline_local_variable.rs","introduce_named_generic.rs","introduce_named_lifetime.rs","invert_if.rs","merge_imports.rs","merge_match_arms.rs","move_bounds.rs","move_from_mod_rs.rs","move_guard.rs","move_module_to_file.rs","move_to_mod_rs.rs","number_representation.rs","promote_local_to_const.rs","pull_assignment_up.rs","qualify_method_call.rs","qualify_path.rs","raw_string.rs","remove_dbg.rs","remove_mut.rs","remove_unused_param.rs","reorder_fields.rs","reorder_impl.rs","replace_derive_with_manual_impl.rs","replace_if_let_with_match.rs","replace_let_with_if_let.rs","replace_qualified_name_with_use.rs","replace_string_with_char.rs","replace_try_expr_with_match.rs","replace_turbofish_with_explicit_type.rs","sort_items.rs","split_import.rs","toggle_ignore.rs","unmerge_use.rs","unwrap_block.rs","unwrap_result_return_type.rs","wrap_return_type_in_result.rs"]},{"name":"utils","files":["gen_trait_fn_body.rs","suggest_name.rs"]}],"files":["assist_config.rs","assist_context.rs","lib.rs","utils.rs"]};
sourcesIndex["ide_completion"] = {"name":"","dirs":[{"name":"completions","dirs":[{"name":"attribute","files":["cfg.rs","derive.rs","lint.rs","repr.rs"]},{"name":"postfix","files":["format_like.rs"]}],"files":["attribute.rs","dot.rs","extern_abi.rs","flyimport.rs","fn_param.rs","format_string.rs","keyword.rs","lifetime.rs","mod_.rs","pattern.rs","postfix.rs","qualified_path.rs","record.rs","snippet.rs","trait_impl.rs","unqualified_path.rs","use_.rs","vis.rs"]},{"name":"render","files":["builder_ext.rs","const_.rs","enum_variant.rs","function.rs","macro_.rs","pattern.rs","struct_literal.rs","type_alias.rs"]}],"files":["completions.rs","config.rs","context.rs","item.rs","lib.rs","patterns.rs","render.rs","snippet.rs"]};
sourcesIndex["ide_db"] = {"name":"","dirs":[{"name":"generated","files":["lints.rs"]},{"name":"imports","files":["import_assets.rs","insert_use.rs","merge_imports.rs"]},{"name":"syntax_helpers","files":["format_string.rs","insert_whitespace_into_node.rs","node_ext.rs"]}],"files":["active_parameter.rs","apply_change.rs","assists.rs","defs.rs","famous_defs.rs","helpers.rs","items_locator.rs","label.rs","lib.rs","line_index.rs","path_transform.rs","rename.rs","rust_doc.rs","search.rs","source_change.rs","symbol_index.rs","traits.rs","ty_filter.rs"]};
sourcesIndex["ide_diagnostics"] = {"name":"","dirs":[{"name":"handlers","files":["add_reference_here.rs","break_outside_of_loop.rs","field_shorthand.rs","inactive_code.rs","incorrect_case.rs","invalid_derive_target.rs","macro_error.rs","malformed_derive.rs","mismatched_arg_count.rs","missing_fields.rs","missing_match_arms.rs","missing_ok_or_some_in_tail_expr.rs","missing_unsafe.rs","no_such_field.rs","remove_this_semicolon.rs","replace_filter_map_next_with_find_map.rs","unimplemented_builtin_macro.rs","unlinked_file.rs","unresolved_extern_crate.rs","unresolved_import.rs","unresolved_macro_call.rs","unresolved_module.rs","unresolved_proc_macro.rs","useless_braces.rs"]}],"files":["lib.rs"]};
sourcesIndex["ide_ssr"] = {"name":"","files":["errors.rs","fragments.rs","from_comment.rs","lib.rs","matching.rs","nester.rs","parsing.rs","replacing.rs","resolving.rs","search.rs"]};
sourcesIndex["la_arena"] = {"name":"","files":["lib.rs","map.rs"]};
sourcesIndex["limit"] = {"name":"","files":["lib.rs"]};
sourcesIndex["mbe"] = {"name":"","dirs":[{"name":"expander","files":["matcher.rs","transcriber.rs"]}],"files":["expander.rs","lib.rs","parser.rs","syntax_bridge.rs","to_parser_input.rs","token_map.rs","tt_iter.rs"]};
sourcesIndex["parser"] = {"name":"","dirs":[{"name":"grammar","dirs":[{"name":"expressions","files":["atom.rs"]},{"name":"items","files":["adt.rs","consts.rs","traits.rs","use_item.rs"]}],"files":["attributes.rs","expressions.rs","generic_args.rs","generic_params.rs","items.rs","params.rs","paths.rs","patterns.rs","types.rs"]},{"name":"syntax_kind","files":["generated.rs"]}],"files":["event.rs","grammar.rs","input.rs","lexed_str.rs","lib.rs","output.rs","parser.rs","shortcuts.rs","syntax_kind.rs","token_set.rs"]};
sourcesIndex["paths"] = {"name":"","files":["lib.rs"]};
sourcesIndex["proc_macro_api"] = {"name":"","dirs":[{"name":"msg","files":["flat.rs"]}],"files":["lib.rs","msg.rs","process.rs","version.rs"]};
sourcesIndex["proc_macro_srv"] = {"name":"","dirs":[{"name":"abis","dirs":[{"name":"abi_1_47","dirs":[{"name":"proc_macro","dirs":[{"name":"bridge","files":["buffer.rs","client.rs","closure.rs","handle.rs","mod.rs","rpc.rs","scoped_cell.rs","server.rs"]}],"files":["diagnostic.rs","mod.rs"]}],"files":["mod.rs","rustc_server.rs"]},{"name":"abi_1_54","dirs":[{"name":"proc_macro","dirs":[{"name":"bridge","files":["buffer.rs","client.rs","closure.rs","handle.rs","mod.rs","rpc.rs","scoped_cell.rs","server.rs"]}],"files":["diagnostic.rs","mod.rs"]}],"files":["mod.rs","rustc_server.rs"]},{"name":"abi_1_56","dirs":[{"name":"proc_macro","dirs":[{"name":"bridge","files":["buffer.rs","client.rs","closure.rs","handle.rs","mod.rs","rpc.rs","scoped_cell.rs","server.rs"]}],"files":["diagnostic.rs","mod.rs","quote.rs"]}],"files":["mod.rs","rustc_server.rs"]},{"name":"abi_1_58","dirs":[{"name":"proc_macro","dirs":[{"name":"bridge","files":["buffer.rs","client.rs","closure.rs","handle.rs","mod.rs","rpc.rs","scoped_cell.rs","server.rs"]}],"files":["diagnostic.rs","mod.rs","quote.rs"]}],"files":["mod.rs","rustc_server.rs"]}],"files":["mod.rs"]}],"files":["cli.rs","dylib.rs","lib.rs"]};
sourcesIndex["proc_macro_test"] = {"name":"","files":["lib.rs"]};
sourcesIndex["profile"] = {"name":"","files":["hprof.rs","lib.rs","memory_usage.rs","stop_watch.rs","tree.rs"]};
sourcesIndex["project_model"] = {"name":"","files":["build_scripts.rs","cargo_workspace.rs","cfg_flag.rs","lib.rs","manifest_path.rs","project_json.rs","rustc_cfg.rs","sysroot.rs","workspace.rs"]};
sourcesIndex["rust_analyzer"] = {"name":"","dirs":[{"name":"cli","files":["analysis_stats.rs","diagnostics.rs","flags.rs","highlight.rs","load_cargo.rs","lsif.rs","parse.rs","progress_report.rs","ssr.rs","symbols.rs"]},{"name":"diagnostics","files":["to_proto.rs"]}],"files":["caps.rs","cargo_target_spec.rs","cli.rs","config.rs","diagnostics.rs","diff.rs","dispatch.rs","from_proto.rs","global_state.rs","handlers.rs","lib.rs","line_index.rs","lsp_ext.rs","lsp_utils.rs","main_loop.rs","markdown.rs","mem_docs.rs","op_queue.rs","reload.rs","semantic_tokens.rs","thread_pool.rs","to_proto.rs"]};
sourcesIndex["sourcegen"] = {"name":"","files":["lib.rs"]};
sourcesIndex["stdx"] = {"name":"","files":["lib.rs","macros.rs","non_empty_vec.rs","panic_context.rs","process.rs"]};
sourcesIndex["syntax"] = {"name":"","dirs":[{"name":"ast","dirs":[{"name":"generated","files":["nodes.rs","tokens.rs"]}],"files":["edit.rs","edit_in_place.rs","expr_ext.rs","generated.rs","make.rs","node_ext.rs","operators.rs","token_ext.rs","traits.rs"]},{"name":"parsing","files":["reparsing.rs"]},{"name":"validation","files":["block.rs"]}],"files":["algo.rs","ast.rs","display.rs","fuzz.rs","hacks.rs","lib.rs","parsing.rs","ptr.rs","syntax_error.rs","syntax_node.rs","ted.rs","token_text.rs","utils.rs","validation.rs"]};
sourcesIndex["test_utils"] = {"name":"","files":["assert_linear.rs","bench_fixture.rs","fixture.rs","lib.rs"]};
sourcesIndex["text_edit"] = {"name":"","files":["lib.rs"]};
sourcesIndex["toolchain"] = {"name":"","files":["lib.rs"]};
sourcesIndex["tt"] = {"name":"","files":["buffer.rs","lib.rs"]};
sourcesIndex["vfs"] = {"name":"","files":["anchored_path.rs","file_set.rs","lib.rs","loader.rs","path_interner.rs","vfs_path.rs"]};
sourcesIndex["vfs_notify"] = {"name":"","files":["lib.rs"]};
sourcesIndex["xtask"] = {"name":"","dirs":[{"name":"release","files":["changelog.rs"]}],"files":["dist.rs","flags.rs","install.rs","main.rs","metrics.rs","release.rs"]};
createSourceSidebar();
